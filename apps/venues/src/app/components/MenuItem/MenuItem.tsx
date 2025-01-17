import { Link } from 'react-router-dom';
import { Menu } from '@HE/style-guide';
import { ReactComponent as InterruptionsIcon } from './interruptions.svg';

interface MenuItemProps {
  label: string;
}

export const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <Menu
      items={[
        {
          label: 'Venues',
          link: <Link to="/venues">Comms</Link>,
          icon: <InterruptionsIcon />,
        },
      ]}
    />
  );
};
