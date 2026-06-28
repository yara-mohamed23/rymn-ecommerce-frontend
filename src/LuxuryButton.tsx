import type { ReactNode } from "react";

interface LuxuryButtonProps {
	children: ReactNode
	onClickButton: () => void;
  }

const LuxuryButton = (props : LuxuryButtonProps) => {
  
  return (
    <>
      <div style={{ padding: "7px", color:"gold"}}>
        <button onClick={props.onClickButton}>
          {props.children}
        </button>
      </div>
    </>
  );
};

export default LuxuryButton;
