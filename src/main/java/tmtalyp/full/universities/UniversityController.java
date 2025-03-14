package tmtalyp.full.universities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/universities")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend requests

public class UniversityController {

    @Autowired
    private UniversityRepository universityRepository;

    @Autowired
    private GridFSService gridFSService;

    @GetMapping
    public List<University> getAllUniversities() {
        return universityRepository.findAll();
    }

    @PutMapping("/{id}")
    public University updateUniversity(@PathVariable String id, @RequestBody University updatedUniversity) {
        Optional<University> existingUniversity = universityRepository.findById(id);
        if (existingUniversity.isPresent()) {
            University university = existingUniversity.get();
            university.setTitle(updatedUniversity.getTitle());
            university.setDescription(updatedUniversity.getDescription());
            university.setImageId(updatedUniversity.getImageId());
            return universityRepository.save(university);
        } else {
            throw new RuntimeException("University not found with id: " + id);
        }
    }

    @PostMapping("/{id}/uploadImage")
    public ResponseEntity<String> uploadImage(@PathVariable String id, @RequestParam("file") MultipartFile file) {
        try {
            String imageId = gridFSService.storeFile(file);
            University university = universityRepository.findById(id).orElseThrow(() -> new RuntimeException("University not found"));

            university.setImageId(imageId);
            universityRepository.save(university);

            return ResponseEntity.ok(imageId);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error uploading image: " + e.getMessage());
        }
    }


    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable String id) {
        try {
            byte[] imageData = gridFSService.getFile(id);
            return ResponseEntity.ok()
                    .header("Content-Type", "image/jpeg") // You can set "image/png" if needed
                    .body(imageData);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(null); // Return 404 if image is not found
        }
    }






}
