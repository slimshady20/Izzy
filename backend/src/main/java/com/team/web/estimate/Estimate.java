package com.team.web.estimate;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "estimate")

public class Estimate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "moving_type") private String movingType;
    @Column (name="moving_date") private LocalDate movingDate;
    @Column (name="square") private Integer square;
    @Column (name="moving_to") private String movingTo;
    @Column (name="moving_from") private String movingFrom;

    @Builder
    private Estimate(String movingType,
                     LocalDate movingDate,
                     Integer square,
                     String movingTo,
                     String movingFrom){
        this.movingType= movingType;
        this.movingDate= movingDate;
        this.square= square;
        this.movingTo=movingTo;
        this.movingFrom=movingFrom;
    }
}
