import { Metadata } from 'next';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                <span className="text-white font-bold text-xl">BDX</span>
              </div>
              <span className="text-2xl font-bold text-white">Beldex Hub</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#articles" className="text-white/70 hover:text-white transition-colors">Articles</a>
              <a href="#categories" className="text-white/70 hover:text-white transition-colors">Categories</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <a href="#cta" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-green-500/20">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-gray-800">
              The Beldex Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Read What&apos;s Next in Crypto.
              <span className="block text-4xl md:text-6xl mt-4 bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Practical insights. No hype.
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Deep dives, explainers, and opinion pieces from builders and researchers across the Beldex ecosystem.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#articles" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/30 text-lg" id="cta">
                Latest articles
              </a>
              <a href="#categories" className="border border-gray-700 text-blue-400 hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold transition-all text-lg">
                Browse topics
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50">329 wallets &middot; No ads &middot; Community owned</p>
          </div>

          {/* Partner Row (placeholders) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
            {["visa","hsbc","ripple","omni","erste","cansaas"].map((name) => (
              <div key={name} className="h-10 rounded-lg border border-gray-800 bg-white/5 flex items-center justify-center text-xs text-white/50">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/60" id="cta2">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mx-auto h-44 w-full max-w-3xl rounded-full bg-green-500/10 blur-3xl" />
          <h3 className="relative -mt-24 text-2xl md:text-3xl font-bold">Discover 2,000+ Coin Crypto</h3>
          <p className="mt-3 text-white/70">Explore top tokens and hidden gems to diversify, grow, and future‑proof your digital portfolio.</p>
          <a href="#cta" className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">Get started</a>
        </div>
      </section>

      {/* From idea to action */}
      <section id="build" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-10 -top-10 w-72 h-72 bg-green-500/10 blur-3xl" />
            <div className="relative rounded-2xl border border-gray-800 bg-gray-800/50 p-6">
              <div className="rounded-xl border border-gray-800 bg-white/5 p-5 w-64">
                <p className="text-white/80 text-sm">Priority Access</p>
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between"><span>Priority</span><span>52%</span></div>
                  <div className="h-2 rounded bg-green-500/20"><div className="h-2 w-1/2 rounded bg-green-500" /></div>
                  <div className="flex items-center justify-between"><span>Other</span><span>32%</span></div>
                  <div className="h-2 rounded bg-green-500/20"><div className="h-2 w-1/3 rounded bg-white/40" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-white">From Idea to Action</h3>
            <p className="mt-3 text-white/70">Simple steps to start trading safely and confidently.</p>
            <ol className="mt-6 space-y-4 text-white/80">
              <li className="rounded-xl border border-gray-800 bg-gray-800/40 p-4"><span className="font-semibold">Step into First Access</span> — Join the waitlist to gain early access. Submit your details and complete identity verification to unlock early entitlements.</li>
              <li className="rounded-xl border border-gray-800 bg-gray-800/40 p-4"><span className="font-semibold">Load Your Currency</span> — Quickly fund your wallet. Flexible settings to buy fiat or crypto directly on platform.</li>
              <li className="rounded-xl border border-gray-800 bg-gray-800/40 p-4"><span className="font-semibold">Order Your Trade Pass</span> — Secure your Trade Pass through our platform. Select from flexible options, including budget and deposit formats.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Featured + Recent Articles */}
      <section id="articles" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 group rounded-2xl border border-gray-800 bg-gray-800/50 overflow-hidden">
            <div className="h-60 bg-linear-to-br from-green-500/10 to-blue-500/10" />
            <div className="p-6">
              <span className="text-xs text-green-300 font-semibold">Featured</span>
              <h2 className="mt-2 text-3xl font-bold group-hover:text-white text-white/90">How Zero‑Knowledge Proofs Protect Your Privacy on Beldex</h2>
              <p className="mt-2 text-white/70">A clear walkthrough of ZK basics and where they&apos;re used in today&apos;s products.</p>
              <div className="mt-4 text-sm text-white/50">8 min read &middot; Research</div>
            </div>
          </article>
          <div className="space-y-4">
            {[
              {title:"Staking vs. PoH: What&apos;s Right For You?",tag:"Guides"},
              {title:"Smart Wallets: Why Account Abstraction Matters",tag:"Explainers"},
              {title:"BDX Tokenomics: Where Fees Go",tag:"Tokenomics"}
            ].map((p,i)=> (
              <article key={i} className="rounded-2xl border border-gray-800 bg-gray-800/50 p-5 hover:border-gray-700 transition-all">
                <span className="text-xs text-green-300 font-semibold">{p.tag}</span>
                <h3 className="mt-2 text-lg font-bold text-white/90 hover:text-white">{p.title}</h3>
                <p className="mt-1 text-white/60 text-sm">Actionable takeaways you can apply today.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {["Guides","Explainers","Research","Tokenomics","Security","Announcements"].map((c)=> (
              <a key={c} href="#articles" className="px-4 py-2 rounded-full border border-gray-800 text-white/80 hover:border-gray-700 hover:text-white transition-colors text-sm bg-gray-800/40">{c}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Beldex Wallet Explainer */}
      <section id="wallet" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Beldex Wallet</h2>
            <p className="text-white/70 text-lg mb-8">
              Official wallet for CLORE—available on Windows, macOS, Linux, iOS, and Android. Manage
              assets, back up and restore, and participate in Proof of Holding (PoH) for immediate
              rewards without lockups.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-500/5 rounded-lg">
                <span className="text-white/80">Proof of Holding (PoH)</span>
                <span className="text-white font-bold">Instant rewards • No minimums</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-500/5 rounded-lg">
                <span className="text-white/80">Multi‑platform</span>
                <span className="text-white font-bold">Desktop & Mobile</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-500/5 rounded-lg">
                <span className="text-white/80">Languages</span>
                <span className="text-white font-bold">EN, ES, RU, ZH, TR</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="https://clore.ai/wallet" rel="noreferrer" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">Download Wallet</a>
              <a href="https://docs.clore.ai/proof-of-holding/overview" rel="noreferrer" target="_blank" className="px-6 py-3 rounded-lg font-semibold border border-gray-700 text-blue-300 hover:bg-gray-800 transition-all">Learn PoH</a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl border border-gray-800 p-6">
              <h4 className="text-white font-semibold mb-2">Why Beldex + GPU Marketplace?</h4>
              <p className="text-white/70 text-sm">Peer‑to‑peer GPU leasing: hosts earn rental fees and a share of
                block rewards; renters access affordable compute for AI, research, and mining.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-2xl border border-gray-800 p-6">
                <h5 className="text-white font-semibold mb-1">On‑Demand Leasing</h5>
                <p className="text-white/60 text-sm">Non‑interruptible. ~10% fee, reduced to ~5% with PoH.</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl border border-gray-800 p-6">
                <h5 className="text-white font-semibold mb-1">Spot Leasing</h5>
                <p className="text-white/60 text-sm">Interruptible. 2.5% fee, reduced to ~1.8% with PoH.</p>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl border border-gray-800 p-6">
              <h5 className="text-white font-semibold mb-2">Coming: Proof‑of‑Stake</h5>
              <p className="text-white/60 text-sm">PoS testnet initiative aimed at improved security and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-medium mb-2">Insights</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Web3 Journal</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Explanations and quick reads on DeFi, GPU economies, and the Beldex network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:'What Proof of Holding Means for Users', tag:'Tokenomics'},
              {title:'GPU Markets: Renting Compute on‑chain', tag:'Research'},
              {title:'Self‑Custody Basics for New Users', tag:'Guides'}
            ].map((p, i) => (
              <article key={i} className="group bg-gray-800/50 border border-gray-800 hover:border-gray-700 transition-all rounded-2xl overflow-hidden">
                <div className="h-40 bg-linear-to-br from-green-500/10 to-blue-500/10" />
                <div className="p-6">
                  <span className="text-xs text-green-300 font-semibold">{p.tag}</span>
                  <h3 className="mt-2 text-xl font-bold group-hover:text-white text-white/90">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">A concise overview with practical steps and links to docs.</p>
                  <a href="#" className="mt-4 inline-block text-blue-300 hover:text-blue-200 font-semibold">Read →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Quick Answers</h3>
          <div className="divide-y divide-purple-500/10 border border-purple-500/20 rounded-xl overflow-hidden">
            {[{
              q:'Is PoH locked?',
              a:'No. Rewards are immediate and you can withdraw any time.'
            },{
              q:'Which platforms are supported?',
              a:'Windows, macOS, Linux, iOS, and Android.'
            },{
              q:'What is the difference between On‑Demand and Spot?',
              a:'On‑Demand cannot be overbid; Spot can be interrupted but costs less.'
            }].map((f, i) => (
              <div key={i} className="p-5 bg-black/40">
                <p className="text-white font-semibold">{f.q}</p>
                <p className="text-white/70 text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                  <span className="text-white font-bold text-xl">BDX</span>
                </div>
                <span className="text-2xl font-bold text-white">Beldex</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                A Web3 editorial hub and guide to the Beldex ecosystem and wallet.
              </p>
              <p className="text-white/50 text-xs">© {new Date().getFullYear()} Beldex Hub. All rights reserved.</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Learn</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#why" className="hover:text-white transition-colors">Why Beldex</a></li>
                <li><a href="#metrics" className="hover:text-white transition-colors">Markets</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Docs</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://docs.clore.ai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Beldex Docs</a></li>
                <li><a href="https://docs.clore.ai/proof-of-holding/overview" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">PoH Overview</a></li>
                <li><a href="https://clore.ai/wallet" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Download Wallet</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter/X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
