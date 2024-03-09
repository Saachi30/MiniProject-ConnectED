import React, {useState} from 'react';
import alumnis from '../../alumni';
import mentors from '../../mentors';
import './ListPage.css';
import ListElement from '../ListElement/ListElement';
import SearchIcon from '@mui/icons-material/Search';
import FilterChoice from '../FilterChoice/FilterChoice';


const ListPage = () => {
  const [search, setSearch] = useState('');
  const [filterValue, setFilterValue] = useState('');

  function onFilterValueSelected(value){
    setFilterValue(value);
  }

  return (
    <div className='outerListBox'>
        <div className='searchbar'>
        <input className='search-input' 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search'>
        </input>
        <SearchIcon className='search-icon'/>
        <FilterChoice filterValueSelected={onFilterValueSelected}></FilterChoice>
        </div>
        <div className='list'>
        {mentors.filter((item) => {
         const itemName = item.fullName ? item.fullName.toLowerCase() : '';
         const filterLowerCase = filterValue.toLowerCase();
         const matchesSearch = search.toLowerCase() === '' || itemName.includes(search.toLowerCase());
         const matchesFilter = filterValue === '' || item.domain.toLowerCase() === filterLowerCase;
         return matchesSearch && matchesFilter;
        })
        .map(mentor=>(
            <ListElement
                key={mentor.id}
                name={mentor.fullName}
                domain={mentor.domain}
                company={mentor.company}
                image={mentor.image}

            />
        ))}
            
        </div>
    </div>
  )
}

export default ListPage
