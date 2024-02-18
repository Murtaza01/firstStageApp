export default function Book({ image, link }) {
  return (
    <>
      <div className="basis-64 ">
        <a href={link} target="_blank">
          <div className="relative flex flex-col shadow-2xl">
            {/* image */}
            <img
              className="h-80 w-64 object-fill shadow-2xl"
              src={image}
              alt=""
            />
            {/* tag */}
            <div className="clipPath absolute h-full w-full bg-[#3652ad]">
              <div className="center   absolute bottom-0 flex-col px-2 py-5 text-white">
                <span>Click to</span>
                <span>Downlaod</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
