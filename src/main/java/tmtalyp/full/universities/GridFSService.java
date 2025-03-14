package tmtalyp.full.universities;

import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSDownloadStream;
import com.mongodb.client.gridfs.model.GridFSUploadOptions;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
public class GridFSService {

    @Autowired
    private GridFSBucket gridFSBucket;

    // Store File in GridFS
    public String storeFile(MultipartFile file) throws IOException {
        try (InputStream inputStream = file.getInputStream()) {
            GridFSUploadOptions options = new GridFSUploadOptions()
                    .chunkSizeBytes(1024); // You can add metadata if needed

            ObjectId fileId = gridFSBucket.uploadFromStream(file.getOriginalFilename(), inputStream, options);
            return fileId.toHexString(); // Return file ID
        }
    }

    // Retrieve File from GridFS
    public byte[] getFile(String fileId) throws IOException {
        ObjectId objectId = new ObjectId(fileId);
        GridFSDownloadStream downloadStream = gridFSBucket.openDownloadStream(objectId);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = downloadStream.read(buffer)) != -1) {
            outputStream.write(buffer, 0, bytesRead);
        }
        downloadStream.close();
        return outputStream.toByteArray();
    }
}
