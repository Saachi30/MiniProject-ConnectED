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
      "https://img.favpng.com/12/20/1/computer-icons-user-profile-login-avatar-png-favpng-EphX5rTBCrk1QLtEWPmS9h1M9.jpg",
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
     
      </div>
      
      
      );
    };
      
    
  

export default ListPage;
