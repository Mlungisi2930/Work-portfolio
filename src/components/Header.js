// Inside the HeaderSection component
const HeaderSection = () => (
    // ...
    <div className="hero-content">
        {/* ... hero-text div ... */}
        
        <div className="hero-image-container">
            {'unnamed.jpg'}
            <img 
                src={profileImage} 
                alt="Mlungisi Mvubu Profile Picture" 
                className="profile-hero-img"
            />
        </div>

    </div>
    // ...
);

// --- Find the AboutSection component and update the small profile image too: ---

// Inside the AboutSection component
// ...
<div className="profile-pic-placeholder">
    {"unnamed.jpg"}
    <img 
        src={profileImage} 
        alt="Mlungisi Mvubu Profile Picture" 
        className="profile-about-img"
    />
</div>
// ...
// ...