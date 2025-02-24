import { Link } from 'react-router-dom';
import { Menu } from '@HE/style-guide';
import App from '../../app';
import { ReactComponent as PhoneIcon } from './phone.svg';

interface MenuItemProps {
  label: string;
}

export const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <Menu
      items={[
        {
          label: 'Comms',
          link: <Link to="/comms">{label}</Link>,
          icon: <PhoneIcon />,
          expanded: false,
        },
      ]}
    />
  );
};
