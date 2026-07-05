import { Scale, Shield } from 'lucide-react';

const LegalSection = () => (
  <section id="legal" className="py-16 bg-slate-800/50 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <Scale size={24} className="text-emerald-400 mr-3" />
        <h2 className="text-3xl font-bold text-white">Legal Notice</h2>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg mb-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
            <Shield size={20} className="mr-2 text-emerald-400" />
            Website Publisher
          </h3>
          <div className="pl-6 text-slate-300 space-y-1">
            <p><strong>Name:</strong> Alix MIEHE</p>
            <p><strong>Address:</strong> 6 Rue Curie, HOCHFELDEN 67270</p>
            <p><strong>Email:</strong> alixmiehe2004@gmail.com</p>
            <p><strong>Phone:</strong> +33 6 44 87 67 57</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Hosting</h3>
          <div className="pl-6 text-slate-300 space-y-1">
            <p><strong>Company:</strong> Vercel</p>
            <p><strong>Address:</strong> 650 California St, San Francisco, CA 94108, United States</p>
            <p>
              <strong>Website:</strong>{' '}
              <a href="https://www.vercel.com" className="text-emerald-400 hover:underline">www.vercel.com</a>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Personal Data</h3>
          <div className="pl-6 text-slate-300 space-y-1">
            <p>In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, and delete your personal data.</p>
            <p>To exercise your rights, please contact me by email at: alixmiehe2004@gmail.com</p>
          </div>
        </div>
      </div>

      <p className="text-slate-400 text-center mt-8">Last updated: March 8, 2025</p>
    </div>
  </section>
);

export default LegalSection;
