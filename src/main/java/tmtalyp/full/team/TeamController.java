package tmtalyp.full.team;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/teams")
@CrossOrigin(origins="http://localhost:5173")
public class TeamController {

    private final TeamRepository teamRepository;

    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @PostMapping
    public Team createTeamMember(@RequestBody Team team) {
        return teamRepository.save(team);
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    // ✅ Update an existing team member
    @PutMapping("/{id}")
    public ResponseEntity<Team> updateTeamMember(@PathVariable String id, @RequestBody Team updatedTeam) {
        return teamRepository.findById(id)
                .map(team -> {
                    team.setName(updatedTeam.getName());
                    team.setAge(updatedTeam.getAge());
                    team.setPhone(updatedTeam.getPhone());
                    team.setEmail(updatedTeam.getEmail());
                    team.setAccess(updatedTeam.getAccess());
                    return ResponseEntity.ok(teamRepository.save(team));
                }).orElseThrow(() -> new RuntimeException("Team member with ID " + id + " not found!"));
    }

}
