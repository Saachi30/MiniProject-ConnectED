import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import alumnis from '../../alumni';
import mentors from '../../mentors';
import './ListPage.css';
import ListElement from '../ListElement/ListElement';
import SearchIcon from '@mui/icons-material/Search';
import FilterChoice from '../FilterChoice/FilterChoice';
import MentorProfile from '../MentorProfile/MentorProfile';


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
        <FilterChoice className='filter' filterValueSelected={onFilterValueSelected}></FilterChoice>
        </div>
        <div className='list'>
        {mentors.filter((item) => {
         // console.log(item)
         const itemName = item.fullName ? item.fullName.toLowerCase() : '';
        // console.log(filterValue) 
         const filterLowerCase = filterValue.toLowerCase();
         const matchesSearch = search.toLowerCase() === '' || itemName.includes(search.toLowerCase());
         const matchesFilter = filterValue === '' || item.domain.toLowerCase() === filterLowerCase;
         return (matchesSearch && matchesFilter);
        })
        .map((mentor)=>{
         // console.log(mentor + "ismentor")
           return (
            <Link to={`/mentor/${mentor.id}`} key={mentor.id}>
           <ListElement
                key={mentor.id}
                name={mentor.fullName}
                domain={mentor.domain}
                company={mentor.company}
                image={mentor.image}
                mentor={mentor}
                

            />
            </Link>)
        })}
            
        </div>
    </div>
  )
}

export default ListPage
