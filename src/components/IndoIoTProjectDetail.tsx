import { ArrowLeft, Github, ExternalLink, Database, Cpu, BarChart3, CheckCircle, AlertCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndoIoTProjectHero from './IndoIoTProjectHero';
import ProjectSection from './ProjectSection';

export default function IndoIoTProjectDetail() {
  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
      </div>

      <IndoIoTProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              IoT technical documentation — ESP32 pinouts, MQTT broker configuration, sensor calibration, troubleshooting — is overwhelmingly written in English. Indonesian developer communities lack a native-language AI assistant for these topics, forcing non-fluent engineers to context-switch between reading English docs and writing Indonesian code. Existing multilingual LLMs have weak coverage of IoT-specific Indonesian vocabulary and use cases.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Gap:</strong> No IoT-domain LLM in Bahasa Indonesia</span>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-start">
                <Database className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Approach:</strong> Synthetic dataset + QLoRA fine-tuning</span>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Outcome:</strong> Deployed Indonesian IoT assistant on consumer GPU</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="End-to-End Pipeline">
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            The project covers the full ML lifecycle from raw data generation to public deployment — entirely on consumer hardware (RTX 4060 Laptop, 8GB VRAM).
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <Database className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Dataset Generation</h4>
              <p className="text-gray-600 text-xs">760 IoT Q&A pairs in Bahasa Indonesia, auto-generated via Groq API (LLaMA 3.1 8B)</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">QLoRA Fine-tuning</h4>
              <p className="text-gray-600 text-xs">4-bit NF4 quantization + LoRA adapters on Qwen2.5-3B-Instruct, ~28 min on RTX 4060</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">MLflow Tracking</h4>
              <p className="text-gray-600 text-xs">Hyperparameters, loss curves, perplexity logged; r=16 vs r=32 run comparison</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Deployment</h4>
              <p className="text-gray-600 text-xs">Model pushed to HuggingFace Hub, Gradio web UI deployed to HF Spaces, Dockerized CPU fallback</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Features" background="gray">
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Cpu className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">QLoRA Fine-tuning — Parameter Efficient</h3>
              <p className="text-gray-600">Only 7.4M of 3.09B parameters trained (0.24%) using LoRA adapters + 4-bit NF4 quantization. Entire training runs on a consumer 8GB VRAM GPU — no expensive cloud GPU required.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Automated Dataset Pipeline</h3>
              <p className="text-gray-600">760 IoT Q&A samples in Bahasa Indonesia generated automatically via Groq API across 5 topic categories (ESP32, MQTT, sensors, networking, troubleshooting). No manual labeling needed.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">MLflow Experiment Tracking</h3>
              <p className="text-gray-600">Full hyperparameter logging, loss per epoch, perplexity, and training artifacts. Side-by-side run comparison (r=16 vs r=32 LoRA rank) with MLflow UI visualization.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Layers className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Gradio Web UI + HuggingFace Spaces</h3>
              <p className="text-gray-600">Interactive chat interface with built-in example IoT questions. Supports GPU mode (4-bit quantized) and CPU fallback (float16) — publicly accessible via HuggingFace Spaces.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Side-by-Side Inference Comparison</h3>
              <p className="text-gray-600">Dedicated script that runs the same IoT question through both the base Qwen2.5 model and the fine-tuned version, making the quality improvement concretely visible.</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Training Results">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-blue-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">0.5297</p>
            <p className="text-gray-700 font-medium">Final Eval Loss</p>
            <p className="text-gray-500 text-sm mt-1">strong convergence on held-out set</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-blue-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">~85.7%</p>
            <p className="text-gray-700 font-medium">Token Accuracy</p>
            <p className="text-gray-500 text-sm mt-1">on evaluation split</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-blue-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">~28 min</p>
            <p className="text-gray-700 font-medium">Training Time</p>
            <p className="text-gray-500 text-sm mt-1">RTX 4060 Laptop, 8GB VRAM</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Configuration</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Base Model</h4>
              <p className="text-gray-600 text-sm">Qwen2.5-3B-Instruct — strong multilingual base with Indonesian capability</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">LoRA Configuration</h4>
              <p className="text-gray-600 text-sm">rank r=16, alpha=32, targeting q_proj and v_proj attention layers</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Quantization</h4>
              <p className="text-gray-600 text-sm">4-bit NF4 via BitsAndBytes — enables 3B model to fit in 8GB VRAM with adapter training</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Training Framework</h4>
              <p className="text-gray-600 text-sm">TRL SFTTrainer + HuggingFace PEFT + PyTorch 2.6 + CUDA 12.4</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Technical Challenges" background="gray">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-900 mb-2">PEFT + PyTorch 2.6 Compatibility Bug</h4>
            <p className="text-gray-600 mb-3">SFTTrainer's automatic LoRA wrapping triggered a <code className="bg-gray-100 px-1 rounded">float8_e8m0fnu dtype</code> error — a known incompatibility between PEFT's auto-cast logic and PyTorch 2.6's new float8 type registration.</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm"><strong>Fix:</strong> Bypassed automatic wrapping by calling <code className="bg-white px-1 rounded">get_peft_model()</code> manually and setting <code className="bg-white px-1 rounded">autocast_adapter_dtype=False</code> in the LoRA config.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-900 mb-2">Gradio Client Boolean JSON Schema Crash</h4>
            <p className="text-gray-600 mb-3"><code className="bg-gray-100 px-1 rounded">gradio_client</code> crashed when parsing API info due to a boolean <code className="bg-gray-100 px-1 rounded">additionalProperties: true</code> in the generated schema — the client expected an object schema, not a boolean.</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm"><strong>Fix:</strong> Applied a targeted monkey-patch to <code className="bg-white px-1 rounded">_json_schema_to_python_type</code> that handles the boolean schema case before the client's schema parser is invoked.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-900 mb-2">Consumer GPU Constraint Throughout</h4>
            <p className="text-gray-600 mb-3">Every stage — dataset generation, training, inference, and containerized deployment — had to be designed around an 8GB VRAM limit with no cloud GPU budget.</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm"><strong>Outcome:</strong> Proved a complete fine-tuning pipeline for a 3B-parameter LLM is achievable on consumer hardware through careful quantization and PEFT choices — a reproducible template for budget-constrained AI projects.</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Try IndoIoT LLM live on HuggingFace
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ask it anything about ESP32, MQTT, or IoT sensors — in Bahasa Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:patricklie995@gmail.com"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/PatrickLie-dev/indoiot-llm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-500 transition font-medium flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5" /> GitHub Repo
            </a>
            <a
              href="https://huggingface.co/spaces/Pat-L/indoiot-llm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-500 transition font-medium flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-5 w-5" /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Projects
        </Link>
      </div>
    </div>
  );
}
