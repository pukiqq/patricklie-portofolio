import { Github, Send, ExternalLink, Database, Search, MessageSquare, BarChart3, CheckCircle, AlertCircle, Server } from 'lucide-react';
import TechDocsProjectHero from './TechDocsProjectHero';
import ProjectSection from './ProjectSection';
import CaseCTA from './case/CaseCTA';
import { IconFeature, MiniCard, StatCard, StageCard, ChallengeCard, Code } from './case/blocks';

export default function TechDocsProjectDetail() {
  return (
    <div>
      <TechDocsProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            Developer and IT teams accumulate large volumes of technical documentation — manuals, runbooks, API specs — that are difficult to search quickly. Traditional keyword search misses intent, and asking colleagues wastes time. There was no lightweight, self-hostable tool that lets teams query their own docs with natural language and trace every answer back to its source.
          </p>
          <div className="panel space-y-3 p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Problem:</strong> Docs are hard to search by intent
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <Search className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Approach:</strong> Vector similarity retrieval + LLM synthesis
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Outcome:</strong> Grounded answers with page citations
              </span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="RAG Architecture">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-mist-300">
            The system is built as a classic RAG pipeline: documents are parsed, chunked, embedded locally (all-MiniLM-L6-v2), and stored in ChromaDB. At query time, the top-k most similar chunks are retrieved and injected into a Groq LLM prompt — which is instructed to answer only from the provided context, eliminating hallucination.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <StageCard icon={<Database className="h-5 w-5" />} title="Index">
              PDF/TXT/MD parsed → chunked → embedded locally → stored in ChromaDB (baked into Docker image)
            </StageCard>
            <StageCard icon={<Search className="h-5 w-5" />} title="Retrieve">
              Query embedded → cosine similarity search → top-k most relevant chunks with source metadata
            </StageCard>
            <StageCard icon={<MessageSquare className="h-5 w-5" />} title="Generate">
              Chunks injected into Groq LLM prompt → grounded answer + filename + page number returned
            </StageCard>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Features" background="gray">
        <div className="space-y-7">
          <IconFeature icon={<Search className="h-5 w-5" />} title="End-to-End RAG Pipeline">
            Configurable loader → indexer → retriever chain with chunk size and overlap tunable via <Code>.env</Code>. Supports PDF, plain text, and Markdown documents.
          </IconFeature>
          <IconFeature icon={<CheckCircle className="h-5 w-5" />} title="Source Citations">
            Every answer includes the source filename and page number, so every claim is verifiable. Zero-hallucination prompt design instructs the LLM to only use provided context.
          </IconFeature>
          <IconFeature icon={<Server className="h-5 w-5" />} title="REST API (Flask)">
            Three endpoints: <Code>POST /api/chat</Code> for Q&A, <Code>GET /api/health</Code> for uptime, and <Code>GET /api/docs</Code> for listing indexed documents.
          </IconFeature>
          <IconFeature icon={<Database className="h-5 w-5" />} title="Docker + Railway Deployment">
            ChromaDB bundled into the Docker image — no external persistent storage needed on Railway. CPU-only PyTorch keeps the image lean and deployable on free-tier cloud runners.
          </IconFeature>
          <IconFeature icon={<BarChart3 className="h-5 w-5" />} title="MLflow Evaluation Pipeline">
            Automated evaluation runs 5 test queries and logs latency, relevance score (keyword heuristic), and success rate to MLflow — providing reproducible quality benchmarks per deployment.
          </IconFeature>
        </div>
      </ProjectSection>

      <ProjectSection title="Technical Challenges">
        <div className="space-y-5">
          <ChallengeCard
            title="Docker Image Size (PyTorch GPU vs CPU)"
            problem="Default PyTorch installation pulls the GPU variant (~2GB), which bloats the image and slows Railway deploys unnecessarily."
            fix={
              <>
                Explicitly installed <Code>torch+cpu</Code> from the PyTorch CPU index, cutting image size significantly while keeping full embedding functionality.
              </>
            }
          />
          <ChallengeCard
            title="Persistent Storage on Railway"
            problem="Railway's free tier doesn't offer persistent volumes, meaning a ChromaDB that lives on disk would be wiped on every redeploy."
            fix="Baked the pre-built ChromaDB vector store directly into the Docker image at build time — no external storage dependency needed."
          />
          <ChallengeCard
            title="MLflow on Windows (WinError 10022)"
            problem="MLflow's uvicorn server uses multiprocessing socket bindings that fail on Windows due to a socket options incompatibility."
            fix={
              <>
                Launched MLflow tracking server with <Code>--workers 1</Code> flag to avoid multiprocessing socket creation on Windows.
              </>
            }
          />
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Metrics" background="gray">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <StatCard value="3" label="REST Endpoints" note="chat, health, docs listing" />
          <StatCard value="5" label="Eval Queries" note="automated MLflow benchmark" />
          <StatCard value="0" label="External Storage" note="ChromaDB bundled in image" />
        </div>
        <div className="panel-quiet p-8">
          <h3 className="mb-6 font-display text-xl font-medium text-mist-50">Roadmap</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <MiniCard title="Multi-document Upload API">
              Let users push new documents at runtime without rebuilding the Docker image
            </MiniCard>
            <MiniCard title="Conversation Memory">
              Add session-based chat history so follow-up questions maintain context
            </MiniCard>
            <MiniCard title="Frontend UI">
              Build a web interface on top of the REST API for non-technical users
            </MiniCard>
          </div>
        </div>
      </ProjectSection>

      <CaseCTA
        title="Want to see TechDocs AI in action?"
        sub="The API is live on Railway — or explore the source code on GitHub."
        links={[
          { label: 'Contact Me', href: 'mailto:patricklie995@gmail.com', icon: <Send className="h-4 w-4" /> },
          {
            label: 'GitHub Repo',
            href: 'https://github.com/PatrickLie-dev/techdocs-ai',
            icon: <Github className="h-4 w-4" />,
            external: true,
          },
          {
            label: 'Live API',
            href: 'https://techdocs-ai-production.up.railway.app/api/health',
            icon: <ExternalLink className="h-4 w-4" />,
            external: true,
          },
        ]}
      />
    </div>
  );
}
