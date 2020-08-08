package com.team.web.category;
import lombok.*;
import javax.persistence.*;
@Entity @Getter @Setter @ToString @NoArgsConstructor
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="key_seq") private Long keySeq;
    @Column(name="title", nullable=false) private String  title;
    @Column(name="contents", nullable=false) private String  contents;
    @Column(name="writer" ,nullable=false) private String  writer;
    @Column(name="image" ,nullable=false) private String  image;
    @Column(name="admin_id", nullable=false) private String  adminId;

    @Builder
    private Category(Long keySeq,
                     String title,
                    String contents,
                    String writer,
                     String image,
                     String adminId){
        this.keySeq = keySeq;
        this.title= title;
        this.contents= contents;
        this.writer= writer;
        this.image= image;
        this.adminId= adminId;

    }
}
