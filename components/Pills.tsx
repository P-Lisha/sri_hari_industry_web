import { Icon } from './Icons';

const PILLS = [
  ['i-truck', 'Quick Delivery'],
  ['i-shield', 'Food-Grade SS 304'],
  ['i-wrench', 'AMC Available'],
  ['i-clock', '24/7 Service'],
];

export function Pills() {
  return (
    <div className="pills">
      <div className="wrap">
        {PILLS.map(([ico, label]) => (
          <div className="pill" key={label}>
            <Icon name={ico} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
