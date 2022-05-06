import AvatarGenerate from '../../utils/AvatarGenerate';
import ExternalIcon from '../icons/ExternalIcon';

export default function ProjectCard({
  name,
  description,
  url,
  className
}: {
  name: string;
  description: string;
  url: string;
  className?: string;
}) {
  return (
    <div className="rounded border border-bgDark/[0.08]">
      <div>
        <div className="flex items-center justify-between border-b bg-bgDark/[0.02] py-4 px-5">
          <div className="flex items-center gap-2">
            <figure className={className}>
              <AvatarGenerate name={name} className="h-6 w-6 rounded-2xl" />
            </figure>
            <span className="font-semibold">{name}</span>
          </div>

          <a target="_blank" rel="noopener noreferrer" href={url}>
            <ExternalIcon className="h-5 w-5 stroke-bgDark/40 transition-all hover:stroke-bgDark/60" />
          </a>
        </div>

        {/* Details */}
        <div className="py-4 px-5">
          <p className="text-sm text-grayText">{description}</p>
        </div>
      </div>
    </div>
  );
}
