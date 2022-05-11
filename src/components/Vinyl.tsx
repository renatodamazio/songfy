import React from "react";
import Image from "./Image";
export default function vinyl(props:any) {
  return (
    <div className="vinyl-disk-container">
      <div className="vinyl-disk">
        <div className="vinyl-cover">
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
