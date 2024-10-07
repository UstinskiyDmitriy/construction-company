import s from './ReusableButton.module.css';

interface ReusabletButton {
  buttonText: string;
  onClick: () => void;
  width: number
}

export default function ReusableButton({ buttonText, onClick, width }:ReusabletButton) {
  return (
    <button className={s.button} onClick={onClick} style={{ width: `${width}%` }}>
      {buttonText}
    </button>
  );
}