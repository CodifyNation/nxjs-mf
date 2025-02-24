// eslint-disable-next-line @typescript-eslint/no-unused-vars;
import { useAuth } from '@acme/core';
import { ChangeEvent, useState } from 'react';
import classes from './app.module.scss';

export function App() {
  const { setLoggedINState } = useAuth();

  const [formData, setFormData] = useState({ name: '', lastName: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedINState({ name: formData.name, lastName: formData.lastName });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes['form-container']}>
        <div className={classes['form-group']}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={classes['form-input']}
            required
          />
        </div>
        <div className={classes['form-group']}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={classes['form-input']}
            required
          />
        </div>
        <button type="submit" className={classes['form-buttons']}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
