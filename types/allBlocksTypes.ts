interface BlockInterface {
  name: string;
  category: string;
  container: {
    height: string;
    className: string;
  };
  new?: boolean;
  code: string;
  image: string;
}

export interface AllBlocksProps {
  comp?: string;
  more?: string;
  className?: string;
  AllBlocksData?: BlockInterface[];
}