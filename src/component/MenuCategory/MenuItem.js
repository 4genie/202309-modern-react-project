import cx from 'classnames';
const MenuItem = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        'text-slate-500 py-2 hover: opacity-75 transition-opacity',
        { 'underline text-slate-900': active }
      )}
    >
      {label}
    </div>
  );
};

export default MenuItem;
