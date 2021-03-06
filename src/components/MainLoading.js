import React from "react";

const Loading = () => {
  return (
    <div className="relative bg- min-h-screen bg-cloud overflow-hidden bg-opacity-70 z-0">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
        <img className="animate-spin" src="images/loading.png" />
      </div>
    </div>
  );
};

export default Loading;
