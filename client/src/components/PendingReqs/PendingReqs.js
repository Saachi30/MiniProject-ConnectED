import React from 'react';
import SingleItem from './singleitem';
import './PendingReqs.css';

const PendingReqs = () => {
  const dummyData = [
    { id: 1, fullName: 'John Doe', yearOfStudy: 'Junior', profilePic: 'profile1.jpg' },
    { id: 2, fullName: 'Jane Smith', yearOfStudy: 'Senior', profilePic: 'profile2.jpg' },
    { id: 3, fullName: 'Alice Johnson', yearOfStudy: 'Sophomore', profilePic: 'profile3.jpg' },
    { id: 4, fullName: 'Bob Williams', yearOfStudy: 'Freshman', profilePic: 'profile4.jpg' },
    { id: 5, fullName: 'Emily Brown', yearOfStudy: 'Graduate', profilePic: 'profile5.jpg' }
  ];

  return (
    <div className="pending-reqs-container">
      <div className="pending-reqs">
        {dummyData.map((item) => (
          <SingleItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PendingReqs;
