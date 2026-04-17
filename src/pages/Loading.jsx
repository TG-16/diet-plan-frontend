import "./loading.css";

const Loading = ({ text = "Loading..." }) => {
  return (
    <>
      <div className="dietLoader">
        <span>🍎</span>
        <span>🥗</span>
        <span>🥤</span>
        <p>Thinking. . .</p>
      </div>
    </>
  );
};

export default Loading;

// const Loading = ({ text = "Loading..." }) => {
//     return (
//     <div className="loaderContainer">
//       <div className="loaderRing"></div>
//       <p>{text}</p>
//     </div>
//   );
// };

// export default Loading;
