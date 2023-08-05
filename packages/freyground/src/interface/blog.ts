//! Interface for handling blgo posts

/// A renderable blog post component
export interface BlogPost {
  // Meta information
  title: String;
  date: Date;
  blurb: String;
  draft: boolean;

  // React component
  Component: React.FC;
}
