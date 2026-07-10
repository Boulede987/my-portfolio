import { Scale, Shield } from 'lucide-react';

const LegalSection = () => (
  <section id="legal" className="py-16 bg-surface/50 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <Scale size={24} className="text-iron mr-3" />
        <h2 className="font-display font-bold text-3xl text-bone">Legal Notice</h2>
      </div>

      <div className="corner-frame bg-surface p-6 mb-6">
        <div className="mb-6">
          <h3 className="font-display font-bold text-xl text-bone mb-3 flex items-center">
            <Shield size={20} className="mr-2 text-iron" />
            Website Publisher
          </h3>
          <div className="pl-6 text-muted space-y-1">
            <p><strong className="text-bone">Name:</strong> Alix MIEHE</p>
            <p><strong className="text-bone">Email:</strong> alixmiehe2004@gmail.com</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-display font-bold text-xl text-bone mb-3">Hosting</h3>
          <div className="pl-6 text-muted space-y-1">
            <p><strong className="text-bone">Company:</strong> Vercel</p>
            <p><strong className="text-bone">Address:</strong> 650 California St, San Francisco, CA 94108, United States</p>
            <p>
              <strong className="text-bone">Website:</strong>{' '}
              <a href="https://www.vercel.com" className="text-iron hover:text-bone hover:underline transition-colors">www.vercel.com</a>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-display font-bold text-xl text-bone mb-3">Personal Data</h3>
          <div className="pl-6 text-muted space-y-1">
            <p>In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, and delete your personal data.</p>
            <p>To exercise your rights, please contact me by email at: alixmiehe2004@gmail.com</p>
          </div>
        </div>
      </div>

      <p className="text-muted text-center mt-8">Last updated: July 5, 2026</p>
    </div>
  </section>
);

export default LegalSection;
