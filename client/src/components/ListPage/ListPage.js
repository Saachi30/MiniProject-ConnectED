import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListPage.css';
import ListElement from '../ListElement/ListElement';
import SearchIcon from '@mui/icons-material/Search';
import FilterChoice from '../FilterChoice/FilterChoice';
import { fetchMentors } from '../../services/api'; // Import fetchMentors function

const ListPage = (props) => {
  const [mentors, setMentors] = useState([]);
  const [search, setSearch] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    // Fetch mentor data from backend when component mounts
    fetchMentors()
      .then(data => {
        if (data.success) {
          const mentorsWithImages = data.mentors.map((mentor) => ({
            ...mentor,
            image: getDummyProfileImage(),
          }));
          setMentors(mentorsWithImages);
        }
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  // Function to generate dummy profile image URLs
  const getDummyProfileImage = () => {
    // Dummy image URLs
    const images = [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      "https://img.freepik.com/free-photo/happy-joyful-guy-enjoying-leisure-time_1262-20555.jpg",
      // Add more dummy image URLs as needed
    ];
    // Randomly select an image URL
    return images[Math.floor(Math.random() * images.length)];
  };

  function onFilterValueSelected(value) {
    setFilterValue(value);
  }

  return (
    <div className='outerListBox'>
      <div className='mentorList'>
      <div className='searchbar'>
        <input
          className='search-input'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search'
        />
        <SearchIcon className='search-icon' />
        <FilterChoice className='filter' filterValueSelected={onFilterValueSelected} />
      </div>
      <div className='list'>
        {mentors
          .filter((item) => {
            const itemName = item.fullName ? item.fullName.toLowerCase() : '';
            const filterLowerCase = filterValue.toLowerCase();
            const matchesSearch = search.toLowerCase() === '' || itemName.includes(search.toLowerCase());
            const matchesFilter = filterValue === '' || item.preferredDomain.toLowerCase() === filterLowerCase;
            return matchesSearch && matchesFilter;
          })
          .map((mentor) => {
            return (
          
                <ListElement
                  searchedMentorData={props.searchedMentorData} setSearchedMentorData={props.setSearchedMentorData}
                  key={mentor._id}
                  name={mentor.name}
                  domain={mentor.preferredDomain}
                  yearOfStudy={mentor.yearOfStudy}
                  phoneNumber={mentor.phoneNumber}
                  email={mentor.email}
                  image={getDummyProfileImage()} // Use dummy profile image URL
                />
          
            );
          })}
      </div>
      </div>
      <div className='chatOption'>
        <div className='searchChat'>
        <input
          className='search-input'
          placeholder='Search'
        />
        <SearchIcon className='search-icon' />
        </div>
        <div className='chatSection'></div>
      </div>
      </div>
      
      
      );
    };
      
    
  

export default ListPage;
