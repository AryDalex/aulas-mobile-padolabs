package com.example.fechadurasdigitais

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.google.android.material.appbar.MaterialToolbar

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mainToolBar = findViewById<MaterialToolbar>(R.id.mainToolBar)

        mainToolBar.setNavigationOnClickListener {
            Toast.makeText(
                this,
                "Hamburger pressionado!!!",
                Toast.LENGTH_SHORT
            ).show()
        }

        mainToolBar.setOnMenuItemClickListener { menuItem ->
            when(menuItem.itemId) {
                R.id.menu_item_notifications -> {
                    Toast.makeText(
                        this,
                        "Ir para a página de notificações!!!",
                        Toast.LENGTH_SHORT
                    ).show()

                    true
                }
                R.id.menu_item_cart -> {
                    Toast.makeText(
                        this,
                        "Ir para a página de carrinho!!!",
                        Toast.LENGTH_SHORT
                    ).show()

                    true
                }
                else -> false
            }
        }
    }
}