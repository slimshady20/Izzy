package com.team.web.statistics;

import lombok.*;

import javax.persistence.*;

@Getter @Setter @Entity @ToString @NoArgsConstructor
@Table(name="statistics")
public class Statistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="key_id") private Long keyId;
    @Column(name="visit") private String visit;
    @Column(name="daily_profit") private String dailyProfit;
    @Column(name="monthly_profit") private String monthlyProfit;
    @Column(name="yearly_profit") private String yearlyProfit;
    @Column(name="pattern") private String pattern;

    @Builder
    private Statistics(Long keyId,
                       String visit,
                       String dailyProfit,
                       String monthlyProfit,
                       String yearlyProfit,
                       String pattern){
        this.keyId=keyId;
    }

}
