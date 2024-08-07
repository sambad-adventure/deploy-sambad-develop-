import { IconAssetProps } from '../types';

export const AngleSmallRightIcon = (props: IconAssetProps) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7501 9.52513L11.1641 4.93913C10.8827 4.65786 10.5011 4.49991 10.1033 4.5C9.70543 4.50009 9.3239 4.65823 9.04264 4.93963C8.76138 5.22102 8.60342 5.60262 8.60352 6.00048C8.60361 6.39834 8.76175 6.77986 9.04314 7.06113L13.6291 11.6461C13.6757 11.6926 13.7126 11.7477 13.7378 11.8085C13.7631 11.8692 13.776 11.9344 13.776 12.0001C13.776 12.0659 13.7631 12.131 13.7378 12.1918C13.7126 12.2525 13.6757 12.3077 13.6291 12.3541L9.04314 16.9391C8.76175 17.2204 8.60361 17.6019 8.60352 17.9998C8.60342 18.3976 8.76138 18.7792 9.04264 19.0606C9.3239 19.342 9.70543 19.5002 10.1033 19.5003C10.5011 19.5003 10.8827 19.3424 11.1641 19.0611L15.7501 14.4751C16.4054 13.8181 16.7733 12.928 16.7733 12.0001C16.7733 11.0722 16.4054 10.1822 15.7501 9.52513Z"
        fill={color}
      />
    </svg>
  );
};