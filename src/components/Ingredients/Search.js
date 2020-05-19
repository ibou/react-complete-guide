import React, { useEffect, useState, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';
import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  const { isLoading, error, data, sendRequest, clear } = useHttp();


  useEffect(() => {
    const { current } = inputRef;

    const handleFocus = () => {
      current.classList.add('active');
    }
    const handleBlur = () => {
      current.classList.remove('active');
    }

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);


    const timer = setTimeout(() => {

      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          'https://react-hooks-update-445e1.firebaseio.com/ingredients.json' + query,
          'GET'
        );
      }
    }, 500);

    return () => {
      clearTimeout(timer);

      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);

    }
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      onLoadIngredients(loadedIngredients);
    }

  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading result </span>}
          <input
            type="text"
            ref={inputRef}
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
