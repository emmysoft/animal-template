import React from "react";
import { Wrapper } from "./BodyStyle";

const Body: React.FC = () => {
  return (
    <>
      <Wrapper>
        <div className="box-1">
          <p className="info-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            veritatis, sequi delectus ipsam praesentium cum aliquid quae fugiat
            soluta tempore nostrum ut expedita iste magnam!
          </p>
        </div>
        <div className="box-2">
          <p className="info-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            consequatur assumenda eaque sit, omnis reprehenderit provident vel
            asperiores dolorum quisquam dolor ullam repellat. Beatae, assumenda.
          </p>
        </div>
        <div className="box-3">
          <p className="info-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            repudiandae quam odit commodi blanditiis explicabo reiciendis
            veritatis, eius illum quos quas accusantium enim eos sed.
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default Body;
