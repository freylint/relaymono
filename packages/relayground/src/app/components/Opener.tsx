//! Opener card component for the various top level pages.

export interface IOpener {
  title: String;
  Content: React.FC;
}

export function Opener(components: IOpener) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{components.title}</h2>
        <components.Content />
      </div>
    </div>
  );
}
