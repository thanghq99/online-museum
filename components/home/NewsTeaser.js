

const NewsTeaser = ({title, summary, imgUrl}) => {
  return (
      <div className="w-full h-96 max-h-96 bg-neutral-800">
          <div className="h-2/5">
            <img alt={title} src={imgUrl} className="object-cover h-full w-full"/>
          </div>
          <div className="flex flex-col my-2 mx-2 text-white">
            <div className="mb-2 text-2xl font-semibold line-clamp-3">{title}</div>
            <div className="opacity-60 line-clamp-4">{summary}</div>
          </div>
      </div>
  );
};

export default NewsTeaser;
