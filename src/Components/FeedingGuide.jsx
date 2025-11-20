import React from 'react';
import './FeedingGuide.css';

const FeedingGuide = () => {
  return (
    <div>
      <div className="feeding-cont">
        <div className="feed-header">
          <h1>Feeding Guide for Your Furry Friends</h1>
          <p>
            Proper nutrition is essential for your pet's health and well-being. This guide provides general recommendations for feeding your dog or cat. Always consult with your
            veterinarian for personalized advice based on your pet's specific needs.
          </p>
        </div>
        <section className="w-full">
          <div className="overflow-x-auto shadow-lg rounded-2xl">
            <table className="feeding-table">
              <thead className="table-header">
                <tr>
                  <th scope="col">Pet Type</th>
                  <th scope="col">Age Group</th>
                  <th scope="col">Weight Range</th>
                  <th scope="col">Meals/Day</th>
                  <th scope="col">Portion Size</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row-green">
                  <td className="pet-type"><span className="material-symbols-outlined icon-green">pets</span> Dog</td>
                  <td>Puppy</td>
                  <td>5-20 lbs</td>
                  <td>3-4</td>
                  <td>1/2 - 1.5 cups</td>
                  <td>Growth formula</td>
                </tr>
                <tr className="row-green">
                  <td className="pet-type"><span className="material-symbols-outlined icon-green">pets</span> Cat</td>
                  <td>Kitten</td>
                  <td>1-5 lbs</td>
                  <td>4-5</td>
                  <td>1/4 - 1/2 cup</td>
                  <td>High protein</td>
                </tr>
                <tr className="row-blue">
                  <td className="pet-type"><span className="material-symbols-outlined icon-blue">dog</span> Dog</td>
                  <td>Adult</td>
                  <td>20-50 lbs</td>
                  <td>2</td>
                  <td>1.5 - 3 cups</td>
                  <td>Maintain weight</td>
                </tr>
                <tr className="row-blue">
                  <td className="pet-type"><span className="material-symbols-outlined icon-blue">cat</span> Cat</td>
                  <td>Adult</td>
                  <td>6-12 lbs</td>
                  <td>2</td>
                  <td>1/2 - 3/4 cup</td>
                  <td>Monitor intake</td>
                </tr>
                <tr className="row-yellow">
                  <td className="pet-type"><span className="material-symbols-outlined icon-yellow">elderly</span> Dog</td>
                  <td>Senior</td>
                  <td>20-50 lbs</td>
                  <td>1-2</td>
                  <td>1 - 2.5 cups</td>
                  <td>Joint support</td>
                </tr>
                <tr className="row-yellow">
                  <td className="pet-type"><span className="material-symbols-outlined icon-yellow">elderly</span> Cat</td>
                  <td>Senior</td>
                  <td>6-12 lbs</td>
                  <td>2</td>
                  <td>1/3 - 2/3 cup</td>
                  <td>Easy digestion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FeedingGuide;