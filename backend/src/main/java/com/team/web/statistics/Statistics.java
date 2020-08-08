package com.team.web.statistics;

import lombok.*;

import javax.persistence.*;

@Getter @Setter @Entity @ToString @NoArgsConstructor
@Table(name="statistics")
public class Statistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="key_seq") private Long keySeq;
    @Column(name="visit") private Long visit;
    @Column(name="daily_profit") private Long dailyProfit;
    @Column(name="monthly_profit") private Long monthlyProfit;
    @Column(name="yearly_profit") private Long yearlyProfit;
    @Column(name="pattern") private Long pattern;

    @Builder
    private Statistics(Long keySeq,
                       Long visit,
                       Long dailyProfit,
                       Long monthlyProfit,
                       Long yearlyProfit,
                       Long pattern){
        this.keySeq=keySeq;
    }

}
