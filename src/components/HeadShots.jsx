/* eslint-disable react/prop-types */
function HeadShots({ img, overlap }) {
  return (
    <div className={`flex-shrink-0 ${overlap ? '-ml-8' : ''}`}>
      <img
        src={img}
        alt="students"
        width={103}
        height={103}
        className="object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full"
      />
    </div>
  );
}

export default HeadShots;
