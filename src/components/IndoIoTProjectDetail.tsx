import { Github, Send, ExternalLink, Database, Cpu, BarChart3, CheckCircle, AlertCircle, Layers } from 'lucide-react';
import IndoIoTProjectHero from './IndoIoTProjectHero';
import ProjectSection from './ProjectSection';
import CaseCTA from './case/CaseCTA';
import { IconFeature, MiniCard, StatCard, StageCard, ChallengeCard, Code } from './case/blocks';

export default function IndoIoTProjectDetail() {
  return (
    <div>
      <IndoIoTProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            IoT technical documentation — ESP32 pinouts, MQTT broker configuration, sensor calibration, troubleshooting — is overwhelmingly written in English. Indonesian developer communities lack a native-language AI assistant for these topics, forcing non-fluent engineers to context-switch between reading English docs and writing Indonesian code. Existing multilingual LLMs have weak coverage of IoT-specific Indonesian vocabulary and use cases.
          </p>
          <div className="panel space-y-3 p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Gap:</strong> No IoT-domain LLM in Bahasa Indonesia
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <Database className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Approach:</strong> Synthetic dataset + QLoRA fine-tuning
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Outcome:</strong> Deployed Indonesian IoT assistant on consumer GPU
              </span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="End-to-End Pipeline">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-mist-300">
            The project covers the full ML lifecycle from raw data generation to public deployment — entirely on consumer hardware (RTX 4060 Laptop, 8GB VRAM).
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StageCard icon={<Database className="h-5 w-5" />} title="Dataset Generation">
              760 IoT Q&A pairs in Bahasa Indonesia, auto-generated via Groq API (LLaMA 3.1 8B)
            </StageCard>
            <StageCard icon={<Cpu className="h-5 w-5" />} title="QLoRA Fine-tuning">
              4-bit NF4 quantization + LoRA adapters on Qwen2.5-3B-Instruct, ~28 min on RTX 4060
            </StageCard>
            <StageCard icon={<BarChart3 className="h-5 w-5" />} title="MLflow Tracking">
              Hyperparameters, loss curves, perplexity logged; r=16 vs r=32 run comparison
            </StageCard>
            <StageCard icon={<Layers className="h-5 w-5" />} title="Deployment">
              Model pushed to HuggingFace Hub, Gradio web UI deployed to HF Spaces, Dockerized CPU fallback
            </StageCard>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Features" background="gray">
        <div className="space-y-7">
          <IconFeature icon={<Cpu className="h-5 w-5" />} title="QLoRA Fine-tuning — Parameter Efficient">
            Only 7.4M of 3.09B parameters trained (0.24%) using LoRA adapters + 4-bit NF4 quantization. Entire training runs on a consumer 8GB VRAM GPU — no expensive cloud GPU required.
          </IconFeature>
          <IconFeature icon={<Database className="h-5 w-5" />} title="Automated Dataset Pipeline">
            760 IoT Q&A samples in Bahasa Indonesia generated automatically via Groq API across 5 topic categories (ESP32, MQTT, sensors, networking, troubleshooting). No manual labeling needed.
          </IconFeature>
          <IconFeature icon={<BarChart3 className="h-5 w-5" />} title="MLflow Experiment Tracking">
            Full hyperparameter logging, loss per epoch, perplexity, and training artifacts. Side-by-side run comparison (r=16 vs r=32 LoRA rank) with MLflow UI visualization.
          </IconFeature>
          <IconFeature icon={<Layers className="h-5 w-5" />} title="Gradio Web UI + HuggingFace Spaces">
            Interactive chat interface with built-in example IoT questions. Supports GPU mode (4-bit quantized) and CPU fallback (float16) — publicly accessible via HuggingFace Spaces.
          </IconFeature>
          <IconFeature icon={<CheckCircle className="h-5 w-5" />} title="Side-by-Side Inference Comparison">
            Dedicated script that runs the same IoT question through both the base Qwen2.5 model and the fine-tuned version, making the quality improvement concretely visible.
          </IconFeature>
        </div>
      </ProjectSection>

      <ProjectSection title="Training Results">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <StatCard value="0.5297" label="Final Eval Loss" note="strong convergence on held-out set" />
          <StatCard value="~85.7%" label="Token Accuracy" note="on evaluation split" />
          <StatCard value="~28 min" label="Training Time" note="RTX 4060 Laptop, 8GB VRAM" />
        </div>
        <div className="panel-quiet p-8">
          <h3 className="mb-6 font-display text-xl font-medium text-mist-50">Training Configuration</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <MiniCard title="Base Model">
              Qwen2.5-3B-Instruct — strong multilingual base with Indonesian capability
            </MiniCard>
            <MiniCard title="LoRA Configuration">
              rank r=16, alpha=32, targeting q_proj and v_proj attention layers
            </MiniCard>
            <MiniCard title="Quantization">
              4-bit NF4 via BitsAndBytes — enables 3B model to fit in 8GB VRAM with adapter training
            </MiniCard>
            <MiniCard title="Training Framework">
              TRL SFTTrainer + HuggingFace PEFT + PyTorch 2.6 + CUDA 12.4
            </MiniCard>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Technical Challenges" background="gray">
        <div className="space-y-5">
          <ChallengeCard
            title="PEFT + PyTorch 2.6 Compatibility Bug"
            problem={
              <>
                SFTTrainer's automatic LoRA wrapping triggered a <Code>float8_e8m0fnu dtype</Code> error — a known incompatibility between PEFT's auto-cast logic and PyTorch 2.6's new float8 type registration.
              </>
            }
            fix={
              <>
                Bypassed automatic wrapping by calling <Code>get_peft_model()</Code> manually and setting <Code>autocast_adapter_dtype=False</Code> in the LoRA config.
              </>
            }
          />
          <ChallengeCard
            title="Gradio Client Boolean JSON Schema Crash"
            problem={
              <>
                <Code>gradio_client</Code> crashed when parsing API info due to a boolean <Code>additionalProperties: true</Code> in the generated schema — the client expected an object schema, not a boolean.
              </>
            }
            fix={
              <>
                Applied a targeted monkey-patch to <Code>_json_schema_to_python_type</Code> that handles the boolean schema case before the client's schema parser is invoked.
              </>
            }
          />
          <ChallengeCard
            title="Consumer GPU Constraint Throughout"
            problem="Every stage — dataset generation, training, inference, and containerized deployment — had to be designed around an 8GB VRAM limit with no cloud GPU budget."
            fixLabel="Outcome"
            fix="Proved a complete fine-tuning pipeline for a 3B-parameter LLM is achievable on consumer hardware through careful quantization and PEFT choices — a reproducible template for budget-constrained AI projects."
          />
        </div>
      </ProjectSection>

      <CaseCTA
        title="Try IndoIoT LLM live on HuggingFace"
        sub="Ask it anything about ESP32, MQTT, or IoT sensors — in Bahasa Indonesia."
        links={[
          { label: 'Contact Me', href: 'mailto:patricklie995@gmail.com', icon: <Send className="h-4 w-4" /> },
          {
            label: 'GitHub Repo',
            href: 'https://github.com/PatrickLie-dev/indoiot-llm',
            icon: <Github className="h-4 w-4" />,
            external: true,
          },
          {
            label: 'Live Demo',
            href: 'https://huggingface.co/spaces/Pat-L/indoiot-llm',
            icon: <ExternalLink className="h-4 w-4" />,
            external: true,
          },
        ]}
      />
    </div>
  );
}
