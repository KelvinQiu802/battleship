import * as GAME_STATE from '../../utils/gameState';
import React from 'react';
import Header from '../Header';
import { FormattedMessage } from 'react-intl';
import { Context } from '../Wrapper';

const Welcome = ({ setGameState, formData, setFormData }) => {
  const context = React.useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.playMode === 'singlePlayer') {
      setFormData((prev) => {
        return { ...prev, p2Name: 'Computer' };
      });
    }
    if (
      formData.p1Name &&
      formData.p2Name &&
      formData.p1Name !== formData.p2Name
    ) {
      setGameState(GAME_STATE.P1PLACING);
    }
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  return (
    <div className='welcome'>
      <Header />
      <main className='area welcome-body'>
        <p className='welcome-intro'>
          <FormattedMessage
            id='welcome.introduction'
          />
        </p>
        <form onSubmit={handleSubmit} className='welcome-form'>
          <label htmlFor='p1Name'>
            <FormattedMessage
              id='welcome.p1Name'
            />
          </label>
          <input
            type='text'
            name='p1Name'
            id='p1Name'
            value={formData.p1Name}
            onChange={handleChange}
            autoFocus
          />
          <br />
          {formData.playMode === 'multiPlayer' ? (
            <>
              <label htmlFor='p2Name'>
                <FormattedMessage
                  id='welcome.p2Name'
                />
              </label>
              <input
                type='text'
                name='p2Name'
                id='p2Name'
                value={formData.p2Name}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <label>
                <FormattedMessage
                  id='welcome.difficulty'
                />
              </label>
              <input
                type='radio'
                name='difficulty'
                id='easy'
                value='easy'
                checked={formData.difficulty === 'easy'}
                onChange={handleChange}
              />
              <label htmlFor='easy'>
                <FormattedMessage
                  id='welcome.difficulty.easy'
                />
              </label>
              <input
                type='radio'
                name='difficulty'
                id='normal'
                value='normal'
                checked={formData.difficulty === 'normal'}
                onChange={handleChange}
              />
              <label htmlFor='normal'>
                <FormattedMessage
                  id='welcome.difficulty.normal'
                />
              </label>
            </>
          )}
          <br />
          <label>
            <FormattedMessage id='welcome.mode'/>
          </label>
          <input
            type='radio'
            name='playMode'
            id='multiPlayer'
            value='multiPlayer'
            checked={formData.playMode === 'multiPlayer'}
            onChange={handleChange}
          />
          <label htmlFor='multiPlayer'>
            <FormattedMessage
              id='welcome.mode.two'
            />
          </label>
          <input
            type='radio'
            name='playMode'
            id='singlePlayer'
            value='singlePlayer'
            checked={formData.playMode === 'singlePlayer'}
            onChange={handleChange}
          />
          <label htmlFor='singlePlayer'>
            <FormattedMessage
              id='welcome.mode.one'
            />
          </label>
          <br />
          <label htmlFor='language'>
            <FormattedMessage id='welcome.lang'/>
          </label>
          <select
            name='language'
            id='language'
            value={context.locale}
            onChange={context.selectLanguage}
          >
            <option value='zh-CN'>中文</option>
            <option value='en-US'>English</option>
          </select>
          <br />
          <button type='submit' className='button-start'>
            <FormattedMessage id='welcome.start'/>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Welcome;
