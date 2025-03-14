package tmtalyp.full.universities;

import com.mongodb.client.gridfs.GridFSBucket;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/files")
public class FileRetrievalController {

    @Autowired
    private GridFSBucket gridFSBucket;

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        InputStream inputStream = gridFSBucket.openDownloadStream(new ObjectId(id));
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = inputStream.read(buffer)) != -1) {
            outputStream.write(buffer, 0, bytesRead);
        }
        inputStream.close();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + id + ".png\"")
                .contentType(MediaType.IMAGE_PNG)
                .body(outputStream.toByteArray());
    }
}
