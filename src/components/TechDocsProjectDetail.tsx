import { ArrowLeft, Github, ExternalLink, Database, Search, MessageSquare, BarChart3, CheckCircle, AlertCircle, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechDocsProjectHero from './TechDocsProjectHero';
import ProjectSection from './ProjectSection';

export default function TechDocsProjectDetail() {
  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
      </div>

      <TechDocsProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Developer and IT teams accumulate large volumes of technical documentation — manuals, runbooks, API specs — that are difficult to search quickly. Traditional keyword search misses intent, and asking colleagues wastes time. There was no lightweight, self-hostable tool that lets teams query their own docs with natural language and trace every answer back to its source.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Problem:</strong> Docs are hard to search by intent</span>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-start">
                <Search className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Approach:</strong> Vector similarity retrieval + LLM synthesis</span>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Outcome:</strong> Grounded answers with page citations</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="RAG Architecture">
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            The system is built as a classic RAG pipeline: documents are parsed, chunked, embedded locally (all-MiniLM-L6-v2), and stored in ChromaDB. At query time, the top-k most similar chunks are retrieved and injected into a Groq LLM prompt — which is instructed to answer only from the provided context, eliminating hallucination.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Index</h4>
              <p className="text-gray-600 text-sm">PDF/TXT/MD parsed → chunked → embedded locally → stored in ChromaDB (baked into Docker image)</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Retrieve</h4>
              <p className="text-gray-600 text-sm">Query embedded → cosine similarity search → top-k most relevant chunks with source metadata</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Generate</h4>
              <p className="text-gray-600 text-sm">Chunks injected into Groq LLM prompt → grounded answer + filename + page number returned</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Features" background="gray">
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">End-to-End RAG Pipeline</h3>
              <p className="text-gray-600">Configurable loader → indexer → retriever chain with chunk size and overlap tunable via <code className="bg-gray-100 px-1 rounded">.env</code>. Supports PDF, plain text, and Markdown documents.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Source Citations</h3>
              <p className="text-gray-600">Every answer includes the source filename and page number, so every claim is verifiable. Zero-hallucination prompt design instructs the LLM to only use provided context.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">REST API (Flask)</h3>
              <p className="text-gray-600">Three endpoints: <code className="bg-gray-100 px-1 rounded">POST /api/chat</code> for Q&A, <code className="bg-gray-100 px-1 rounded">GET /api/health</code> for uptime, and <code className="bg-gray-100 px-1 rounded">GET /api/docs</code> for listing indexed documents.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Docker + Railway Deployment</h3>
              <p className="text-gray-600">ChromaDB bundled into the Docker image — no external persistent storage needed on Railway. CPU-only PyTorch keeps the image lean and deployable on free-tier cloud runners.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">MLflow Evaluation Pipeline</h3>
              <p className="text-gray-600">Automated evaluation runs 5 test queries and logs latency, relevance score (keyword heuristic), and success rate to MLflow — providing reproducible quality benchmarks per deployment.</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Technical Challenges">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-900 mb-2">Docker Image Size (PyTorch GPU vs CPU)</h4>
            <p className="text-gray-600 mb-3">Default PyTorch installation pulls the GPU variant (~2GB), which bloats the image and slows Railway deploys unnecessarily.</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm"><strong>Fix:</strong> Explicitly installed <code className="bg-white px-1 rounded">torch+cpu</code> from the PyTorch CPU index, cutting image size significantly while keeping full embedding functionality.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-900 mb-2">Persistent Storage on Railway</h4>
            <p className="text-gray-600 mb-3">Railway's free tier doesn't offer persistent volumes, meaning a ChromaDB that lives on disk would be wiped on every redeploy.</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm"><strong>Fix:</strong> Baked the pre-built ChromaDB vector store directly into the Docker image at build time — no external storage dependency needed.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-900 mb-2">MLflow on Windows (WinError 10022)</h4>
            <p className="text-gray-600 mb-3">MLflow's uvicorn server uses multiprocessing socket bindings that fail on Windows due to a socket options incompatibility.</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm"><strong>Fix:</strong> Launched MLflow tracking server with <code className="bg-white px-1 rounded">--workers 1</code> flag to avoid multiprocessing socket creation on Windows.</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Metrics" background="gray">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">3</p>
            <p className="text-gray-700 font-medium">REST Endpoints</p>
            <p className="text-gray-500 text-sm mt-1">chat, health, docs listing</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">5</p>
            <p className="text-gray-700 font-medium">Eval Queries</p>
            <p className="text-gray-500 text-sm mt-1">automated MLflow benchmark</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">0</p>
            <p className="text-gray-700 font-medium">External Storage</p>
            <p className="text-gray-500 text-sm mt-1">ChromaDB bundled in image</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Roadmap</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Multi-document Upload API</h4>
              <p className="text-gray-600 text-sm">Let users push new documents at runtime without rebuilding the Docker image</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Conversation Memory</h4>
              <p className="text-gray-600 text-sm">Add session-based chat history so follow-up questions maintain context</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Frontend UI</h4>
              <p className="text-gray-600 text-sm">Build a web interface on top of the REST API for non-technical users</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to see TechDocs AI in action?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            The API is live on Railway — or explore the source code on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:patricklie995@gmail.com"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/PatrickLie-dev/techdocs-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-500 transition font-medium flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5" /> GitHub Repo
            </a>
            <a
              href="https://techdocs-ai-production.up.railway.app/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-500 transition font-medium flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-5 w-5" /> Live API
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
