import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Embrace the captivating allure of the Anthurium RVDP X SELF seedling, a stunning addition to Greenboog’s Anthurium collections. Anthurium RVDP X SELF is a rare and unique hybrid seedling known for its striking foliage and robust growth. This exotic plant is now available for sale, making it a prized addition to any plant collection.</p>
        
        <div className="description-features">
        <b>Features:</b>

        <p><span>Foliage: </span>Heart-shaped, glossy leaves with prominent veins, displaying rich green hues.</p>
        <p><span>Growth Habit:</span> Compact and bushy, ideal for indoor cultivation and display.</p>
        </div>
        <div className="description-caretips">
        <p><span>Care Tips:</span></p>

        <p><span>Soil:</span> Prefers a well-draining mix such as orchid bark, perlite, and peat moss.</p>
        <p><span>Light:</span> Thrives in bright, indirect light; avoid direct sunlight.</p>
        <p><span>Watering:</span> Keep soil consistently moist but not waterlogged; water when the top inch of soil feels dry.</p>
        <p><span>Humidity:</span> Requires high humidity (60-80%); use a humidifier or mist regularly.</p>
        <p><span>Temperature:</span> Ideal range is 65°F to 80°F (18°C to 27°C); protect from cold drafts.</p>
        <p><span>Fertilization:</span> Feed monthly during the growing season with a balanced, water-soluble fertilizer.</p>
      </div>
      </div>
    </div>
  )
}

export default DescriptionBox
