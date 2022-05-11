import React from "react";
import Image from "./Image";
export default function Vinil(props:any) {
  return (
    <div className="vinil-disk-container">
      <div className="vinil-disk">
        <div className="vinil-cover">
          <Image src={props.child} />
        </div>
        <div className="radius">
          <div className="radius">
            <div className="radius">
              <div className="radius">
                <div className="radius">
                  <div className="radius">
                    <div className="radius">
                      <div className="radius">
                        <div className="radius"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
