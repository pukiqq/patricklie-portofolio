import { Github, Send, Database, Search, FileText, ShieldCheck, Gauge, AlertCircle, CheckCircle } from 'lucide-react';
import BPKProjectHero from './BPKProjectHero';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';
import CaseCTA from './case/CaseCTA';
import { IconFeature, StatCard, StageCard, ChallengeCard, Code } from './case/blocks';

export default function BPKProjectDetail() {
  const base = import.meta.env.BASE_URL;
  const selfCorrection = [`${base}images/bpk-rag/phase3_extraction_with_self_correction.png`];
  const smokeTest = [`${base}images/bpk-rag/schemas_smoketest_pass.png`];
  const perfProfile = [`${base}images/bpk-rag/perf_profile_after_offline_fix.png`];

  return (
    <div>
      <BPKProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            BPK's "Warta Pemeriksa" audit magazine mixes full-width and 2-column layouts on the same page,
            with financial figures buried in dense Indonesian prose. The task: extract every financial issue
            and its USD value from the Jambaran-Tiung Biru (JTB) EPCC GPF audit finding as
            schema-validated JSON/CSV — with every number provably traceable to the source text, not just
            structurally valid.
          </p>
          <div className="panel space-y-3 p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Problem:</strong> LLMs invent or drop figures under
                extraction pressure
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Approach:</strong> Verbatim figure extraction + two-way
                grounding/coverage gate
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Outcome:</strong> 5/5 figures, 100% accuracy, self-correcting
              </span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Pipeline Architecture">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-mist-300">
            A LangGraph state machine with six nodes. A deterministic keyword router (no LLM) sends JTB
            queries down a source-pinned extraction path and everything else down general synthesis or
            cross-document comparison — reproducible and leak-proof by construction.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <StageCard icon={<Search className="h-5 w-5" />} title="Route + Retrieve">
              Deterministic keyword router → source-pinned, balanced, or general ChromaDB retrieval over
              multilingual-e5-base embeddings
            </StageCard>
            <StageCard icon={<FileText className="h-5 w-5" />} title="Extract">
              Groq/Ollama in JSON mode, temp=0, producing a Pydantic-validated draft — prompts contain zero
              ground-truth figures
            </StageCard>
            <StageCard icon={<ShieldCheck className="h-5 w-5" />} title="Validate + Repair">
              Grounding (precision) + coverage (recall) checks; failures trigger a targeted repair prompt,
              up to 2 retries
            </StageCard>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Anti-Hallucination Design" background="gray">
        <div className="space-y-7">
          <IconFeature icon={<Database className="h-5 w-5" />} title="Verbatim Figures, Computed Numbers">
            The LLM never touches figures as numbers — it emits the amount copied verbatim from the source
            (e.g. Indonesian-locale <Code>"6,99"</Code>). The numeric value is a deterministic computed field,
            so the model performs no arithmetic and the value cannot drift.
          </IconFeature>
          <IconFeature icon={<ShieldCheck className="h-5 w-5" />} title="Two-Way Validation Gate">
            <strong className="text-mist-200">Grounding</strong> confirms every verbatim figure appears in
            the retrieved source chunks (catches invented figures).{' '}
            <strong className="text-mist-200">Coverage</strong> confirms every figure found in the source
            appears in the output (catches dropped figures).
          </IconFeature>
          <IconFeature icon={<Gauge className="h-5 w-5" />} title="Self-Correcting Repair Loop">
            On the live JTB run, the first pass silently dropped one figure. Grounding passed — nothing was
            invented — but coverage caught the gap, and the repair retry recovered it on the next pass.
          </IconFeature>
        </div>
        <div className="mt-8">
          <ImageCarousel
            images={selfCorrection}
            alt="Extraction run showing the coverage check catching a dropped figure and the repair retry recovering it"
            height="h-[28rem]"
          />
        </div>
      </ProjectSection>

      <ProjectSection title="Technical Challenges">
        <div className="space-y-5">
          <ChallengeCard
            title="Multi-Column PDF Layout"
            problem="Magazine pages mix full-width and 2-column layouts on the same page — a single midpoint x-threshold misreads column order and scrambles reading flow."
            fix="Recursive XY-cut segmentation with pdfplumber, splitting each page into column regions before extracting text in reading order."
          />
          <ChallengeCard
            title="Cold Startup Latency"
            problem="Initial model load (embeddings + LLM client init) took 47–76 seconds per run, unusable for iterative testing."
            fix="Forced HuggingFace offline mode to skip network hub lookups on every startup, cutting cold start to ~4.6s — a ~15x reduction."
          />
          <ChallengeCard
            title="Structurally Valid but Wrong"
            problem="Pydantic schema validation proves the JSON shape is correct but says nothing about whether a figure was invented or dropped."
            fix="Layered a grounding + coverage semantic check on top of schema validation, closing the gap between 'valid JSON' and 'true figures'."
          />
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Evidence" background="gray">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <StatCard value="5/5" label="Figures Extracted" note="incl. 1 subtotal, correctly flagged" />
          <StatCard value="100%" label="Figure Accuracy" note="verbatim from source" />
          <StatCard value="~4.3s" label="Warm Inference" note="retrieval + 2 LLM calls + validation" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widecaps text-mist-400">
              Schema smoke-test
            </p>
            <ImageCarousel images={smokeTest} alt="Schema validation smoke test passing" height="h-72" />
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widecaps text-mist-400">
              Cold-start fix, before/after
            </p>
            <ImageCarousel
              images={perfProfile}
              alt="Performance profile after the HuggingFace offline-mode cold-start fix"
              height="h-72"
            />
          </div>
        </div>
      </ProjectSection>

      <CaseCTA
        title="Want to see the BPK RAG pipeline in detail?"
        sub="Full architecture, ADRs, and setup instructions are in the repo README."
        links={[
          { label: 'Contact Me', href: 'mailto:patricklie995@gmail.com', icon: <Send className="h-4 w-4" /> },
          {
            label: 'GitHub Repo',
            href: 'https://github.com/PatrickLie-dev/bpk-rag-assessment',
            icon: <Github className="h-4 w-4" />,
            external: true,
          },
        ]}
      />
    </div>
  );
}
