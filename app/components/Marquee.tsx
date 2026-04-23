import { Fragment } from "react";

export default function Marquee({ phrases }: { phrases: string[] }) {
  const loop = [...phrases, ...phrases, ...phrases];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((p, i) => (
          <Fragment key={i}>
            <span>{p}</span>
            <span className="dot" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
