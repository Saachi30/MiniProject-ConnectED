import React from 'react';
import alumnis from '../../alumni';
import mentors from '../../mentors';
import './ListPage.css';
import ListElement from '../ListElement/ListElement';
import SearchIcon from '@mui/icons-material/Search';

const ListPage = () => {
  return (
    <div className='outerListBox'>
        <div className='searchbar'>
        <input className='search-input' placeholder='Search'>
           
        </input>
        <SearchIcon className='search-icon'/>
        </div>
        <div className='list'>
        {mentors.map(mentor=>(
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
