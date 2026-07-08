import { Github, ExternalLink } from 'lucide-react';
import CaseHero from './case/CaseHero';

export default function IndoIoTProjectHero() {
  return (
    <CaseHero
      title="IndoIoT LLM"
      subtitle="Indonesian-Language IoT Assistant via Fine-Tuned LLM"
      description="An end-to-end AI project fine-tuning Qwen2.5-3B-Instruct with QLoRA for IoT technical Q&A in Bahasa Indonesia — trained on a custom 760-sample dataset, tracked with MLflow, and deployed publicly on HuggingFace Spaces."
      facts={[
        { label: 'Role', value: 'Solo Developer' },
        { label: 'Period', value: 'April 2026 (~2 weeks)' },
      ]}
      techStack={['Python', 'QLoRA', 'Qwen2.5', 'PEFT', 'Groq', 'Gradio', 'HuggingFace', 'MLflow', 'Docker']}
      status="Completed"
      links={[
        {
          label: 'GitHub',
          href: 'https://github.com/PatrickLie-dev/indoiot-llm',
          icon: <Github className="h-4 w-4" />,
        },
        {
          label: 'Live Demo',
          href: 'https://huggingface.co/spaces/Pat-L/indoiot-llm',
          icon: <ExternalLink className="h-4 w-4" />,
          primary: true,
        },
        {
          label: 'HuggingFace Model',
          href: 'https://huggingface.co/Pat-L/indoiot-qwen2.5-lora',
          icon: <ExternalLink className="h-4 w-4" />,
        },
      ]}
    />
  );
}
