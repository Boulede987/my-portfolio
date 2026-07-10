import Image from 'next/image';
import { Award, Download } from 'lucide-react';
import { Certification } from '../types';

interface Props {
  cert: Certification;
}

const CertificationCard = ({ cert }: Props) => (
  <div className="corner-frame bg-surface overflow-hidden hover:ring-1 hover:ring-ember-bright/40 transition-all flex flex-col h-full">
    {cert.imageUrl && (
      <div className="w-full h-48 relative">
        <Image src={cert.imageUrl} alt={`${cert.name} certificate`} fill className="object-cover object-center" />
      </div>
    )}
    <div className="p-6 flex-grow flex flex-col">
      <div className="mb-4">
        <h3 className="font-display font-bold text-xl text-bone mb-1">{cert.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-iron">{cert.issuer}</span>
          <span className="text-sm font-mono text-muted">{cert.date}</span>
        </div>
      </div>
      {cert.description && <p className="text-muted mb-6 flex-grow">{cert.description}</p>}
      <a
        href={cert.fileUrl}
        download
        className="mt-auto flex items-center justify-center gap-2 p-2 border border-iron/40 text-bone hover:border-ember-bright hover:text-ember-bright transition-colors font-mono text-sm"
      >
        <Award size={18} />
        <span>View Certificate</span>
        <Download size={18} />
      </a>
    </div>
  </div>
);

export default CertificationCard;
