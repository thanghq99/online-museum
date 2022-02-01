

const CollectionTeaser = ({name, color, imgUrl}) => {
  return (
      <div className="relative">
          <div className={"absolute top-0 px-2 py-2 w-full text-2xl font-bold bg-neutral-700/50 text-white border-l-8 " + color}>{name}</div>
          <img alt="collection-img" src={imgUrl} className="object-cover h-full w-full" />
      </div>
  );
};

export default CollectionTeaser;
