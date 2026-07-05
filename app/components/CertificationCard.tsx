import Image from 'next/image';
import { Award, Download } from 'lucide-react';
import { Certification } from '../types';

interface Props {
  cert: Certification;
}

const CertificationCard = ({ cert }: Props) => (
  <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:ring-1 hover:ring-emerald-500/50 transition-all flex flex-col h-full">
    {cert.imageUrl && (
      <div className="w-full h-48 relative">
        <Image src={cert.imageUrl} alt={`${cert.name} certificate`} fill className="object-cover object-center" />
      </div>
    )}
    <div className="p-6 flex-grow flex flex-col">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-1">{cert.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-emerald-400">{cert.issuer}</span>
          <span className="text-sm text-slate-400">{cert.date}</span>
        </div>
      </div>
      {cert.description && <p className="text-slate-400 mb-6 flex-grow">{cert.description}</p>}
      <a
        href={cert.fileUrl}
        download
        className="mt-auto flex items-center justify-center gap-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 hover:text-white transition-colors"
      >
        <Award size={18} />
        <span>View Certificate</span>
        <Download size={18} />
      </a>
    </div>
  </div>
);

export default CertificationCard;
