package tmtalyp.full.universities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "CardsGrid")
public class University {
    @Id
    private String id;
    private String title;
    private String description;
    private String imageId; // Stores GridFS file ID

    // ✅ Default Constructor (Required by Spring Data MongoDB)
    public University() {}

    // ✅ Constructor with all fields
    public University(String id, String title, String description, String imageId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageId = imageId;
    }

    // ✅ Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageId() { return imageId; }
    public void setImageId(String imageId) { this.imageId = imageId; }
}
