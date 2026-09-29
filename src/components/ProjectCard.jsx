import { useRef, useState } from "react";

const GithubIcon = ({ href, disabled }) => (
  <a
    href={disabled ? "#" : href}
    target={disabled ? undefined : "_blank"}
    rel={disabled ? undefined : "noopener noreferrer"}
    className={`hover:opacity-70 transition-opacity flex-shrink-0 ${disabled ? "pointer-events-none opacity-50" : ""}`}
  >
    <img src="/images/github.png" alt="GitHub" className="w-4 h-4 md:w-5 md:h-5" />
  </a>
);

const ProjectCard = ({ project }) => {
  const { title, media, titleLink, liveLink, githubLink, githubDisabled, description } = project;
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const Title = titleLink ? (
    <a href={titleLink} target="_blank" rel="noopener noreferrer">
      <h2>{title}</h2>
    </a>
  ) : (
    <h2>{title}</h2>
  );

  if (media.type === "text") {
    return (
      <div className="project-card project-card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className="project-card">
        <div className="project-card-media" onClick={toggleVideo}>
          <video
            ref={videoRef}
            src={media.src}
            poster={media.poster}
            loop
            muted
            playsInline
            preload={media.poster ? "none" : "auto"}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </div>
        <div className="project-card-body">
          {Title}
          <div className="flex items-center gap-4 mt-4">
            <button className="video-play-button" onClick={toggleVideo}>
              {playing ? "Pause" : "Click to play"}
            </button>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="video-visit-button">
                Visit
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  const mediaContent =
    media.type === "image-pair" ? (
      <div className="flex gap-2 w-full h-full">
        <img src={media.src[0]} alt={media.alt[0]} className="flex-1 h-full object-cover rounded-md" loading="lazy" />
        <img src={media.src[1]} alt={media.alt[1]} className="flex-1 h-full object-cover rounded-md" loading="lazy" />
      </div>
    ) : (
      <img src={media.src} alt={media.alt} className="object-contain w-full h-full" loading="lazy" />
    );

  return (
    <div className="project-card">
      <div className="project-card-media">
        {titleLink ? (
          <a href={titleLink} target="_blank" rel="noopener noreferrer" className="project-card-media-link">
            {mediaContent}
            {description && (
              <div className="project-overlay">
                <p className="project-description">{description}</p>
              </div>
            )}
          </a>
        ) : (
          <div className="project-card-media-link">
            {mediaContent}
            {description && (
              <div className="project-overlay">
                <p className="project-description">{description}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="project-card-body flex items-center gap-2 sm:gap-3">
        {Title}
        {(githubLink || githubDisabled) && <GithubIcon href={githubLink} disabled={githubDisabled} />}
      </div>
    </div>
  );
};

export default ProjectCard;
